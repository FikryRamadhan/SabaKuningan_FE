import React from 'react';

const rating = [
  {
    name: 'Unknown',
    rating: '★★★★★',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores non hic aliquam aliquid ullam. Dolore totam quisquam, eius laborum facere illum est fugiat natus temporibus sit ea reprehenderit cupiditate labore!',
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Sarah',
  },
  {
    name: 'Unknown',
    rating: '★★★★★',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores non hic aliquam aliquid ullam. Dolore totam quisquam, eius laborum facere illum est fugiat natus temporibus sit ea reprehenderit cupiditate labore!',
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Michael',
  },
  {
    name: 'Unknown',
    rating: '★★★★★',
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores non hic aliquam aliquid ullam. Dolore totam quisquam, eius laborum facere illum est fugiat natus temporibus sit ea reprehenderit cupiditate labore!",
    avatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Emma',
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-2xl font-semibold text-center mb-10">Rating about SabaKuningan</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {rating.map((item, index) => (
          <div key={index} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center mb-3 space-x-3">
              <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">{item.name}</p>
                <div className="text-yellow-500 text-sm">{item.rating}</div>
              </div>
            </div>
            <p className="text-gray-950 text-sm">"{item.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;


