import {
  ConnectWallet,
  Web3Button,
  useOwnedNFTs,
  useAddress,
  useContract,
  ThirdwebNftMedia,
  useClaimNFT,
} from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import { editionDropAddress } from "../const";

const Home: NextPage = () => {
  const address = useAddress();
  const { contract } = useContract(editionDropAddress);
  const { data, isLoading } = useOwnedNFTs(contract, address);
  const { mutateAsync: claim, isLoading: isClaiming } = useClaimNFT(contract);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={`${styles.title, styles.gradientText3}`}>
                  Fanda Wallet<br />
          </h1>
          <div className={styles.connect}>
            <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />
            {address ? (
              <div className={` ${styles.gradientText0} `}>
                <h2>Points Details</h2>
                <div className={`${styles.pointTypes}`}>
                <p>Fanda</p>
                <hr className={`${styles.solid}`}></hr>
                <p>Dunkin</p>
                <hr className={`${styles.solid}`}></hr>
                <p>Ford Focus Group</p>
                <hr className={`${styles.solid}`}></hr>
                <p>Influencer Tier 1</p>
                <hr className={`${styles.solid}`}></hr>
                <p>Influencer Tier 2</p>
                <hr className={`${styles.solid}`}></hr>
                <p>Influencer Tier 3</p>
                <hr className={`${styles.solid}`}></hr>
                <p>Total</p>

                </div>
                <div className={`${styles.points}`}>
                <p>23,950</p>
                <hr className={`${styles.solid}`}></hr>
                <p>7,000</p>
                <hr className={`${styles.solid}`}></hr>
                <p>5,378</p>
                <hr className={`${styles.solid}`}></hr>
                <p>549</p>
                <hr className={`${styles.solid}`}></hr>
                <p>0</p>
                <hr className={`${styles.solid}`}></hr>
                <p>0</p>
                <hr className={`${styles.solid}`}></hr>
                <p>36,292</p>
                </div>
              </div>
            ) : (
              <p>Please log in with your Google account or email</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
