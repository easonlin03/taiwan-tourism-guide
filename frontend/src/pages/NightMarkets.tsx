import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiFilter, FiSearch, FiMapPin, FiStar, FiClock } from 'react-icons/fi';

interface NightMarket {
  _id: string;
  name: string;
  region: string;
  rating: number;
  imageUrl: string;
  operatingDays: string[];
  description: string;
}

const NightMarkets = () => {
  const [nightMarkets, setNightMarkets] = useState<NightMarket[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const regions = [
    '台北', '新北', '桃園', '新竹', '苗栗', '台中', '彰化', '南投',
    '雲林', '嘉義', '台南', '高雄', '屏東', '宜蘭', '花蓮', '台東'
  ];

  useEffect(() => {
    // 模擬獲取夜市數據
    setLoading(false);
    const mockData: NightMarket[] = [
      {
        _id: '1',
        name: '士林夜市',
        region: '台北',
        rating: 4.4,
        imageUrl: 'https://via.placeholder.com/300x200?text=Shilin',
        operatingDays: ['一', '二', '三', '四', '五', '六', '日'],
        description: '台灣最大的夜市，美食種類最多'
      },
      {
        _id: '2',
        name: '寧夏夜市',
        region: '台北',
        rating: 4.3,
        imageUrl: 'https://via.placeholder.com/300x200?text=Ningxia',
        operatingDays: ['一', '二', '三', '四', '五', '六', '日'],
        description: '小而精的美食夜市'
      },
    ];
    setNightMarkets(mockData);
  }, []);

  const filtered = nightMarkets.filter(market => {
    const matchRegion = !selectedRegion || market.region === selectedRegion;
    const matchSearch = !searchQuery || market.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchRegion && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">台灣夜市</h1>
          <p className="text-gray-600">探索全台特色夜市，品嚐推薦美食</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {/* Search */}
          <div className="mb-6">
            <div className="flex gap-2">
              <FiSearch className="w-5 h-5 text-gray-400 self-center" />
              <input
                type="text"
                placeholder="搜尋夜市..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Filters */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
              <FiFilter size={16} />
              按地區
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              <button
                onClick={() => setSelectedRegion('')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  !selectedRegion
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                全部
              </button>
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedRegion === region
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <>
            <p className="text-gray-600 mb-4">找到 {filtered.length} 個夜市</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((market) => (
                <Link
                  key={market._id}
                  to={`/night-markets/${market._id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={market.imageUrl}
                    alt={market.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {market.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <FiMapPin size={16} />
                      {market.region}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <FiClock size={16} />
                      {market.operatingDays.length === 7 ? '每日營業' : `${market.operatingDays.length} 天營業`}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                        夜市
                      </span>
                      <div className="flex items-center gap-1">
                        <FiStar size={16} className="text-yellow-400 fill-current" />
                        <span className="font-semibold">{market.rating}</span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                      {market.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">沒有找到符合條件的夜市</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default NightMarkets;
