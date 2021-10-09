import React from "react";
import Head from "next/head";
import ReactDOM from "react-dom";
import App from "./App";
import DraggableComponent from "./components/DraggableComponent";
import styles from "./styles/Home.module.css";
import Preview from "./components/Preview";
import { ComponentsProvider } from "./contexts/ComponentsContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <ComponentsProvider>
//         <main className={styles.main}>
//           <div>
//             <DraggableComponent />
//             <DraggableComponent bg="red" />
//           </div>
//           <Preview />
//         </main>
//       </ComponentsProvider>
//     </div>
//   );
// }