"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import Ouc from "@/public/images/ouc.png";
import Link from "next/link";

interface OutOfCoinsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const OutOfCoins = ({ open, onOpenChange }: OutOfCoinsProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[90%]  md:max-w-sm bg-app-gradient rounded-2xl mx-auto border-none p-6">
        <DialogTitle className="sr-only">Out of Coins</DialogTitle>
        <div className=" flex flex-col items-center gap-4">
          <Image src={Ouc} alt="Out of Coins" className="w-[70%]" />

          <p className="font-semibold text-lg lg:text-2xl text-center text-brand-color">
            You are out of coins
            <br />
            Buy coins to continue
          </p>

          <Link
            href="/coins"
            onClick={() => onOpenChange(false)}
            className="w-full text-center font-semibold text-white bg-proceed-btn 
              rounded-lg py-3 hover:opacity-90 transition-opacity"
          >
            Buy Coins
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OutOfCoins;
