import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import { useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";
import logo from "../assets/logo.png"
import styles from "../styles/Home.module.css";
const style = {
    wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex `,
    logoContainer: `flex items-center cursor-pointer`,
    logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
    searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    headerItems: ` flex items-center justify-end`,
    headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
    headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
  }
  
  const Header1 = () => {
    const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
    return (
      <div className={style.wrapper}>
        <Link href="/">
          <div className={style.logoContainer}>
          <Image src={logo} height={60} width={100} className={styles.logo} />
            <div className={style.logoText}>FIFA</div>
          </div>
        </Link>
        <div className={style.searchBar}>
          <div className={style.searchIcon}>
            <AiOutlineSearch />
          </div>
          <input
            className={style.searchInput}
            placeholder="Search items, collections, and accounts"
          />
        </div>
        <div className={style.headerItems}>
        <Link href="/create">
            <div className={style.headerItem}> Add A Ticket </div>
          </Link>
          <div className={style.headerItem}> Stats </div>
          <div className={style.headerItem}> Resources </div>
          <div className={style.headerIcon}>
            <CgProfile />
          </div>
          <div className={style.headerIcon}>
            <MdOutlineAccountBalanceWallet />
          </div>
        </div>
        <div className={styles.right}>
        {address ? (
          <>
            <a
              className={styles.secondaryButton}
              onClick={() => disconnectWallet()}
            >
              Disconnect Wallet
            </a>
            <p style={{ marginLeft: 8, marginRight: 8, color: "white" }}>|</p>
            <p style={{color : "white"}}>{address.slice(0, 6).concat("...").concat(address.slice(-4))}</p>
          </>
        ) : (
          <a
            className={styles.mainButton}
            onClick={() => connectWithMetamask()}
          >
            Connect Wallet
          </a>
        )}
      </div>
      </div>
    )
  }
  
  export default Header1