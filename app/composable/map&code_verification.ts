import { useState } from "react";
import axios from "axios";

export function usePostcodeVerification() {
  const API_URL = "https://api.postcodes.io/postcodes";

  const [result, setResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const verifyPostcode = async (code: string) => {
    if (!code) {
      setError("Postcode cannot be empty");
      setResult(null);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const res = await axios.get(`${API_URL}/${code}`, "");
      const data = res.data;

      if (data.status === 200) {
        setResult(data.result);
      } else {
        setError("Invalid postcode");
        setResult(null);
      }
    } catch (err: any) {
      if (err) {
        setError(err.data.error);
        setResult(null);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    result,
    isLoading,
    error,
    verifyPostcode,
  };
}
