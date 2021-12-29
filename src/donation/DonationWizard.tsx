import { Box, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { CountSelection } from "./CountSelection";

interface Props {}

export const DonationWizard = (props: Props) => {
  const [step, setStep] = useState(0);
  const [donationDetails, setDonationDetails] = useState({
    count: 20,
  });

  const next = (values: any = {}) => {
    const mergeDetails = { ...donationDetails, ...values };
    setStep(step + 1);
    setDonationDetails(mergeDetails);
  };

  const previous = (values: any = {}) => {
    setStep(step - 1);
  };

  const pages = [
    <CountSelection next={next} initialCount={donationDetails.count} />,
    <div>Page 2</div>,
  ];

  return (
    <Box boxShadow="xl" p={8} bg="white" borderRadius="xl" minW="sm">
      {pages[step]}
    </Box>
  );
};
