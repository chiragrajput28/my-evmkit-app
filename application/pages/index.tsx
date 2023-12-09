import type { NextPage } from "next";
import { useContext, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useContract, useContractRead} from "@thirdweb-dev/react";
import { greeter } from "../const/contracts";

const Home: NextPage = () => {
  const {contract} = useContract(greeter)

  //1. read the smart contract 'greet' function
    
  const {data: greeting, isLoading, error} = useContractRead(contract, "greet") 
   


  //2. call setGreeting

  return (
    <div className="w-full mx-auto pr-8 pl-8 max-w-7xl relative pb-10 mt-32">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
      hello world!
      </h1>
      <p>
        {isLoading && "Loading.."}
        {greeting}
      </p>
      </div>
  );
};

export default Home;
