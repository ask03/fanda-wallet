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
          <h1 className={styles.title}>
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
              <div className={styles.card}>
                <h2>Points</h2>
                <p>Fanda Points: 20,120</p>
                <p>Ford Points: 502</p>
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
