import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />

      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi libero,
        nisi illum ea distinctio id saepe eaque inventore praesentium ipsa
        veritatis sapiente blanditiis, facilis rerum error aut esse iste fugiat.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        neque, fugit deserunt animi nostrum quas aperiam dignissimos magnam
        voluptas fugiat officiis distinctio, qui odit labore obcaecati maiores
        fuga vero praesentium.
      </p>

      <Footer />
    </div>
  );
}