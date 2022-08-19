import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

import Header from "../components/Header"


import {
  MediaRenderer,
  useActiveListings,
  useMarketplace,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
const style = {
  wraper :'flex flex-col items-center container-lg text-[#9B072E]',
  wrapper: `bg-[#CECED0] flex-initial w-[15rem] h-[20rem] my-20 mx-20 rounded-2xl overflow-hidden cursor-pointer position-center`,
  imgContainer: `h-2/3 w-full overflow-hidden flex justify-center items-center`,
  nftImg: `w-full object-cover`,
  details: `p-3`,
  info: `flex justify-between text-[#9B072E] drop-shadow-xl`,
  infoLeft: `flex-0.6 flex-wrap`,
  collectionName: `font-semibold text-sm text-[#9B072E]`,
  assetName: `font-bold text-lg mt-2`,
  infoRight: `flex-0.4 text-right`,
  priceTag: `font-semibold text-sm text-[#9B072E]`,
  priceValue: `flex items-center text-xl font-bold mt-2`,
  ethLogo: `h-5 mr-2`,
  likes: `text-[#9B072E] font-bold flex items-center w-full justify-end mt-3`,
  likeIcon: `text-xl mr-2`,}
const NFT: NextPage = () => {
  const router = useRouter();


  const marketplace = useMarketplace(
    "0x42eE4D6B42e82810179971F926145a46b828Ac9c" 
  );

  const { data: listings, isLoading: loadingListings } =
    useActiveListings(marketplace);

  return (
    <div  className={style.wraper}>
       
    <Header/>
    
    <div className={styles.container}>
       <div style={{ marginTop: 150, marginBottom: 50 }}>
       <h1 className={styles.h2}>Qatar2022</h1>
       <p className={styles.explain}>
       
World Cup 2022 Tickets
          
       </p>
       </div>

       <div className="main">
         {
            loadingListings ? (
             <div>Loading listings...</div>
           ) : (
             <div className={styles.listingGrid}>
               {listings?.map((listing) => (
                 <div
                 className={style.wrapper}
                   key={listing.id}
                 
                   onClick={() => router.push(`/listing/${listing.id}`)}
                 >





<div className={style.imgContainer}>
        <img src={listing.asset.image} alt={listing.asset.image} className={style.nftImg} />
      </div>
      <div className={style.details}>
        <div className={style.info}>
          <div className={style.infoLeft}>
            <div className={style.assetName}>{listing.asset.name}</div>
          </div>
         
            <div className={style.infoRight}>
             
              <div className={style.priceValue}>
               
                                   <p>  <b>{listing.buyoutCurrencyValuePerToken.displayValue}</b>{" "}
                      {listing.buyoutCurrencyValuePerToken.symbol}
                    </p>
              </div>
            </div>
        
        </div></div>

</div>
                ))}
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default NFT;