import './About.css';

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 150,
    is_active:true,
  };


  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];


export default function About(){
    if (user=== null || user === undefined){
        return (
            <p>User not found.</p>
        )
    }
    const type = user.is_active ? "Active" : "Not Activated";

    const listItems = products.map(product =>
        <li key={product.id}>
          {product.title} - {product.id}
        </li>
      );

    return (
        <>
        {/* <h1>About Us</h1> */}
            <p>Hello, I am {user.name}.</p>
            <img 
                src={user.imageUrl} 
                className="avatar" 
                alt="loading" 
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }} 
            />
            <p>Status: {type}</p>
            <ul>{listItems}</ul>
        {/* <p>Test</p> */}
        </>
    )
};
