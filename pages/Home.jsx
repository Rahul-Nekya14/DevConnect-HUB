import React from "react";

const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
)`,
      }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded">
        <h1 className="text-4xl font-bold mb-4">Welcome to DevConnect</h1>
        <p className="text-lg">A platform to showcase your projects and connect with tech professionals.</p>
      </div>
    </div>
  );
};

export default Home;
