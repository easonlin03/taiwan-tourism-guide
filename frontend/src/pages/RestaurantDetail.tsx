import { useParams } from 'react-router-dom';
import { FiMapPin, FiStar, FiPhone, FiClock, FiDollarSign, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const RestaurantDetail = () => {
  const { id } = useParams();

  const restaurant = {
    _id: id,
    name: '鼎泰豐',
    region: '台北',
    cuisine: '台灣菜',
    rating: 4.8,
    reviewCount: 2345,
    imageUrl: 'https://via.placeholder.com/800x400?text=Din+Tai+Fung',
    description: '享譽國際的小籠包專賣店',
    fullDescription: `鼎泰豐是享譽國際的台灣餐廳，以其精緻的小籠包聞名於世。每個小籠包都由師傅精心製作，
    使用最好的食材和傳統的製作工藝。

我們提供多種小籠包口味，從經典的豬肉小籠包到創新的蟹粉小籠包，應有盡有。
除了小籠包，我們還提供其他精緻的台灣菜餚。`,
    phone: '(02) 2393-8888',
    priceRange: '$$$',
    location: {
      address: '台北市信義區信義路五段 7 號 101 購物中心'
    },
    businessHours: {
      monday: { open: '11:00', close: '22:00' },
      tuesday: { open: '11:00', close: '22:00' },
      wednesday: { open: '11:00', close: '22:00' },
      thursday: { open: '11:00', close: '22:00' },
      friday: { open: '11:00', close: '22:30' },
      saturday: { open: '10:00', close: '22:30' },
      sunday: { open: '10:00', close: '22:00' },
    },
    recommendedDishes: [
      {
        name: '豬肉小籠包',
        price: 180,
        description: '經典款，每一個都是精心製作'
      },
      {
        name: '蟹粉小籠包',
        price: 220,
        description: '獨特風味，新鮮蟹肉'
      },
      {
        name: '蝦仁燒賣',
        price: 200,
        description: '飽滿的蝦仁，口感鮮美'
      },
      {
        name: '黑毫豬肉燒賣',
        price: 190,
        description: '傳統做法，肉質嫩滑'
      },
    ],
  };

  const reviews = [
    {
      _id: '1',
      userName: '陳芷柔',
      rating: 5,
      title: '世界級美食',
      content: '每次來都是為了這個小籠包，真的沒有失望過。湯汁飽滿，皮薄餡多。',
      date: '2024-05-10'
    },
    {
      _id: '2',
      userName: '郭子傑',
      rating: 5,
      title: '必吃',
      content: '列隊時間長，但絕對值得等待。服務親切，食物品質穩定。',
      date: '2024-05-08'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/restaurants"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
        >
          <FiArrowLeft size={20} />
          返回美食列表
        </Link>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <img
            src={restaurant.imageUrl}
            alt={restaurant.name}
            className="w-full h-96 object-cover"
          />
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {restaurant.name}
                </h1>
                <div className="flex flex-wrap gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <FiMapPin size={20} />
                    {restaurant.region}
                  </div>
                  <div className="flex items-center gap-2">
                    <FiStar size={20} className="text-yellow-400 fill-current" />
                    {restaurant.rating} ({restaurant.reviewCount} 評論)
                  </div>
                </div>
              </div>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold self-start">
                ⭐ 收藏
              </button>
            </div>

            {/* Info Grid */}
            <div className="grid md:grid-cols-2 gap-6 py-6 border-t border-gray-200">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <FiDollarSign size={18} />
                  消費價位
                </h3>
                <p className="text-2xl font-bold text-gray-900">{restaurant.priceRange}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <FiPhone size={18} />
                  聯絡電話
                </h3>
                <p className="text-gray-900">{restaurant.phone}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">菜系</h3>
                <p className="text-gray-900">{restaurant.cuisine}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">地址</h3>
                <p className="text-gray-900 text-sm">{restaurant.location.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">餐廳介紹</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {restaurant.fullDescription}
          </p>
        </div>

        {/* Business Hours */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FiClock size={24} />
            營業時間
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(restaurant.businessHours).map(([day, hours]) => (
              <div key={day} className="flex justify-between text-gray-700">
                <span className="font-medium">
                  {day === 'monday' ? '星期一' : 
                   day === 'tuesday' ? '星期二' :
                   day === 'wednesday' ? '星期三' :
                   day === 'thursday' ? '星期四' :
                   day === 'friday' ? '星期五' :
                   day === 'saturday' ? '星期六' : '星期日'}
                </span>
                <span>{hours.open} - {hours.close}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Dishes */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">推薦菜色</h2>
          <div className="space-y-4">
            {restaurant.recommendedDishes.map((dish, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{dish.name}</h3>
                  <span className="text-lg font-bold text-blue-600">NT$ {dish.price}</span>
                </div>
                <p className="text-gray-600">{dish.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">評論</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mb-6">
            寫評論
          </button>

          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review._id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{review.userName}</h3>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        size={16}
                        className={`${
                          i < review.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{review.title}</h4>
                <p className="text-gray-700">{review.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
