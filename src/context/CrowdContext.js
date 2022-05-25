import { createContext, useContext, useState } from "react";

const CrowdContext = createContext({});

export const CrowdContextProvider = ({ children }) => {
  const [backed, setBacked] = useState(89914);
  const [totalBackers, setTotalBackers] = useState(5007);
  const [bamboo, setBamboo] = useState(101);
  const [black, setBlack] = useState(64);
  const [mahogony, setMahogony] = useState(0);
  const [pledgeAmount, setPledgeAmount] = useState("");
  const [range, setRange] = useState(89);
  const [selectedPledge, setSelectedPledge] = useState("bamboo");
  const [modal, setModal] = useState(false);

  return (
    <CrowdContext.Provider
      value={{
        backed,
        totalBackers,
        bamboo,
        black,
        mahogony,
        pledgeAmount,
        range,
        selectedPledge,
        modal,
        setBacked,
        setTotalBackers,
        setBamboo,
        setBlack,
        setMahogony,
        setPledgeAmount,
        setRange,
        setSelectedPledge,
        setModal,
      }}
    >
      {children}
    </CrowdContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(CrowdContext);
};
