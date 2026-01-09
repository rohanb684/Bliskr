import Image from "next/image";
import coins from "@/public/images/coins.png";
import coinPile from "@/public/images/coinPile.png";

const COIN_PACKAGES = [
  { id: 1, price: 20, coins: 160 },
  { id: 2, price: 10, coins: 80 },
  { id: 3, price: 5, coins: 40 },
  { id: 4, price: 1, coins: 8 },
];

const CoinsPage = () => {
  return (
    <div className="w-full py-4 pb-24">
      <div className="mb-4">
        <h1 className="text-brand-color text-2xl font-bold">Out of Coins?</h1>
        <p className="text-brand-color text-sm">
          Buy coins and continue your talks
        </p>
      </div>

      <div className="w-fit mx-auto sm:px-12 sm:py-7 p-4 rounded-xl bg-white shadow-brand-color flex items-center justify-center gap-4 mb-6">
        <Image src={coins} alt="Coins" className="w-12 h-12" />
        <div className="text-left">
          <p className="text-amber-500 text-sm font-bold">You have remaining</p>
          <p className="text-brand-color text-2xl font-bold">65 coins</p>
        </div>
      </div>

      <div className="w-full flex-center mb-6">
        <Image
          src={coinPile}
          alt="Pile of coins"
          className="w-[80%] sm:w-[60%]"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {COIN_PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-xl shadow-brand-color sm:py-7 p-4 flex flex-col"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-brand-color text-2xl font-bold">
                  ${pkg.price}
                </p>
                <p className="text-amber-500 text-sm font-medium">
                  {pkg.coins} coins
                </p>
              </div>
              <Image src={coins} alt="Coins" className="w-10 h-10" />
            </div>

            <button
              className="w-full py-2.5 mt-auto text-white font-semibold rounded-[10px] 
                bg-[linear-gradient(135deg,#FF7415_0%,#55128A_100%)] 
                shadow-[0_4px_8px_0_#E6B0C8] 
                hover:opacity-90 cursor-pointer"
            >
              Buy Coins
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinsPage;
