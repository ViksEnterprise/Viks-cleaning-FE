import { useState } from "react";
import axios from "axios";

export function usePostcodeVerification() {
  const API_URL = "https://api.postcodes.io/postcodes";

  const [result, setResult] = useState<any>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const verifyPostcode = async (code: string) => {
    setResult("");
    setError(null);

    if (!code) {
      setError("Postcode cannot be empty");
      return;
    }

    try {
      setIsLoading(true);

      const res = await axios.get(`${API_URL}/${code}`);
      const data = res.data;

      if (data.status === 200) {
        setResult(data.result);
      } else {
        setError("Invalid postcode");
      }
    } catch (err: any) {
      if (err.response && err.response.data) {
        setError(err.response.data.error || "Invalid postcode");
      } else {
        setError("Network error");
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
