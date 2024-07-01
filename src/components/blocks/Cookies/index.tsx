"use client"
import { Button, Paper, Text, Group, CloseButton } from '@mantine/core';
import React, {useState, useEffect} from 'react'
import {setLocalStorage, getLocalStorage} from '../../../lib/storageHelper'
const CookiesBanner = () => {
  const [accepted, setAccepted] = useState<boolean>(false);
  const [consentStatus, setConsentStatus] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const acceptCookies = () => {
    setLocalStorage('cookiesAccepted', 'true');
    setAccepted(true);
  };
  // const declineCookies = () => {
  //   setLocalStorage('cookiesAccepted', 'false');
  //   setAccepted(false);
  // };
  //consent status for google analytics
  useEffect(() => {
    //pick the status from the decision made by accept or decline
    const cookiesAccepted = getLocalStorage('cookiesAccepted', null);
    setConsentStatus(cookiesAccepted)
  }, [setConsentStatus])
  useEffect(() => {
    const newValue = consentStatus ? 'granted' : 'denied'
    window.gtag("consent", "update", {
      'analytics_storage': newValue,
    })
    //For Testing
    //console.log("Cookie Consent: ", consentStatus)
  }, [consentStatus]);
  //modal appearance
  useEffect(() => {
    // Set a timeout to delay the appearance of the modal (e.g., 2000 milliseconds = 2 seconds)
    const delayTimeout = setTimeout(() => {
      setShowModal(true);
    }, 3000);
    // Clear the timeout if the component is unmounted before the delay completes
    return () => clearTimeout(delayTimeout);
  }, []); // Run this effect only once when the component mounts
  /*useEffect(() => {
    const HandleClicks = (e) => {
      if (ref.current && !ref.current.contains(e.target)){
        // user clicked outside of modal container, close the modal
        setLocalStorage('cookiesAccepted', 'true');
        // const cookiesAccepted = localStorage.getItem('cookiesAccepted');
        setAccepted(true)
        // consentStatus(cookiesAccepted)

        // user clicked outside of modal container, close the modal
        return;
      }
    }
    window.addEventListener("click", HandleClicks)
    // CLEANUP
    // remove event listener
    return () => {
      window.removeEventListener("click", HandleClicks)
    }
  },[])*/
  return (
    <>
    {showModal &&
    <div 
      className={`cc-banner-container ${accepted || consentStatus ? 'cc-animate-hidden': 'cc-animate-visible'}`} 
    >
      <div className="cc-banner-wrapper">
      <Paper withBorder p="lg" radius="lg" shadow="md" color="white">
        <Group justify="space-between" mb="xs">
          <Text fz="md" fw={500}>
            Allow cookies
          </Text>
          <CloseButton aria-label="Close cookies modal" onClick={acceptCookies} mr={-9} mt={-9} />
        </Group>
        <Text c="dimmed" fz="xs">
          By clicking “Accept All”, you agree to the storing of cookies on your device 
          to enhance site navigation, analyze site usage, and assist in our marketing efforts. 
          View our Cookie Policy for more information.
        </Text>
        <Group justify="flex-end" mt="md">
          <Button variant="default" size="xs">
            Cookies Settings
          </Button>
          <Button variant="outline" color="green" size="xs" onClick={acceptCookies}>
            Accept All
          </Button>
        </Group>
      </Paper>
      </div>
    </div>
    }
    </>
  );
}
export default CookiesBanner;