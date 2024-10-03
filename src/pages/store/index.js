import { product } from "@/component/Api";
import ProductList from "@/component/ProductList";
import styles from "../../styles/store.module.css";
import React, { useEffect } from "react";
import dynamic from 'next/dynamic'


const ComponentA = dynamic(() => import('./loading'))

const Store = ({ data }) => {
  // const [showMore, setShowMore] = useState(false)

  console.log(data);
  setTimeout(()=>{
    return <><ComponentA/></>
  },500)

  
  return (

    <>
      <div className={styles.ProductList}>
        {  data.map((item) => {
          console.log(item, "dddddd");
          return <ProductList key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

// export async function getServerSideProps() {
//   // console.log(res.json())
//   const data = await product();
//   return {
//     props: {
//       data,
//     },
//   };
// }

export async function getStaticProps() {
  // console.log(res.json())
  const data = await product();
  return {
    props: {
      data,
    },
  };
}
export default Store;


// import { product } from "@/component/Api";
// import ProductList from "@/component/ProductList";
// import styles from "../../styles/store.module.css";
// import React, { useState, useEffect } from "react";
// import { Spin } from 'antd';
// const Store = ({ data }) => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Set a timeout to simulate delay (500ms in this case)
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 500);

//     // Cleanup timeout when the component unmounts or is re-rendered
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <div className={styles.ProductList}>
//         {isLoading ? (
//           <h1>Loading...</h1> // You can replace this with your shimmer or loading state
//         ) : (
//           data.map((item) => (
//             <ProductList key={item.id} item={item} />
//           ))
//         )}
//       </div>
//     </>
//   );
// };

// export async function getStaticProps() {
//   const data = await product();
//   return {
//     props: {
//       data,
//     },
//   };
// }

// export default Store;
