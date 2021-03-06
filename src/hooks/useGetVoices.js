import { useEffect, useState } from 'react';

export default function useGetVoices() {
  const [filteredVoices, setFilteredVoice] = useState([]);

  function getVoices() {
    return new Promise((resolve, reject) => {
      let voiceArr = speechSynthesis.getVoices();
      if (voiceArr.length) {
        resolve(voiceArr);
        return;
      }

      speechSynthesis.onvoiceschanged = () => {
        voiceArr = speechSynthesis.getVoices();
        resolve(voiceArr);
      };
    });
  }

  useEffect(() => {
    async function filterAndSetVoicesByLang(lang) {
      const voices = await getVoices();

      setFilteredVoice(
        voices.filter((voice) => {
          return voice.lang === lang;
        })
      );
    }

    filterAndSetVoicesByLang('pt-BR');
  }, []);

  return filteredVoices;
}
