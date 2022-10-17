import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Pratik',
      email: 'admin@mail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jay',
      email: 'user@mail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '100001',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 520,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.3,
      numReviews: 15,
      description: 'high quality shirt',
    },

    {
      // _id: '100002',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p2.jpg',
      price: 150,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.7,
      numReviews: 15,
      description: 'high quality Pant',
    },

    {
      // _id: '100003',
      name: 'Addidas Slim shirt',
      slug: 'addidas-slim-shirt',
      category: 'Shirts',
      image: '/images/p3.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Addidas',
      rating: 4.3,
      numReviews: 15,
      description: 'high quality shirt',
    },
  ],
};

export default data;
