import { API_URL } from "@/lib/constants";

export const useVerify = () => {
  // const verifyContract = async (contractData: any) => {
  const verifyContract = async ({
    address,
    solSource,
    version,
  }: {
    address: string;
    solSource: string;
    version: string;
  }) => {
    try {
      const response = await fetch(`${API_URL}/solc/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address,
          solSource,
          version,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to verify contract');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error verifying contract:', error);
      throw error;
    }
  };

  const getVersions = async () => {
    try {
      const response = await fetch(`${API_URL}/solc/versions`);
      if (!response.ok) {
        throw new Error('Failed to fetch versions');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching versions:', error);
      throw error;
    }
  }

  return { verifyContract, getVersions  };
}