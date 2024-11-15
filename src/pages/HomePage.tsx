import React from 'react';
import { Users, Brush } from 'lucide-react';

const HomePage = () => {
  const characters = [
    {
      name: 'كاناي',
      role: 'البطل الرئيسي',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
      description: 'محارب شاب يسعى للعثور على حقيقة ماضيه الغامض.'
    },
    {
      name: 'ساكورا',
      role: 'البطلة',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      description: 'محاربة قوية تساعد كاناي في رحلته.'
    },
    {
      name: 'هيروشي',
      role: 'المعلم',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
      description: 'معلم حكيم يوجه كاناي في رحلته.'
    }
  ];

  const crew = [
    {
      name: 'تاكاشي ياماموتو',
      role: 'الكاتب',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80',
      description: 'كاتب مانجا محترف مع خبرة 15 عامًا.'
    },
    {
      name: 'يوكي تاناكا',
      role: 'الرسام',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      description: 'فنان موهوب معروف بأسلوبه الفريد.'
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <div className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          مرحباً بكم في{' '}
          <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
            مانجا كاناي
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          انضم إلى مغامرة كاناي في عالم مليء بالسحر والأسرار
        </p>
      </div>

      {/* Characters Section */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <Users className="w-6 h-6 text-blue-500" />
          <h2 className="text-2xl font-bold">الشخصيات</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((character) => (
            <div key={character.name} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-colors">
              <img 
                src={character.image} 
                alt={character.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{character.name}</h3>
                <p className="text-blue-400 text-sm mb-3">{character.role}</p>
                <p className="text-gray-400">{character.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Crew Section */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <Brush className="w-6 h-6 text-blue-500" />
          <h2 className="text-2xl font-bold">طاقم العمل</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {crew.map((member) => (
            <div key={member.name} className="flex gap-6 bg-gray-900 p-6 rounded-xl border border-gray-800">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-400">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;