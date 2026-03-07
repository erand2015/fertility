// src/lib/warthog.ts

// Provoni këtë URL të re ose "https://api.warthog.network/api/v1" nëse rregullohet
const BASE_URL = "https://war7.warthog.network/api/v1";

export const getNetworkStats = async () => {
  try {
    const response = await fetch(`${BASE_URL}/network/stats`, { 
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    });
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error("Network Stats Error:", error);
    return null;
  }
};

export const getRecentBlocks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/blocks?limit=15`, {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    });
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error("Recent Blocks Error:", error);
    return [];
  }
};

export const getBlockDetails = async (id: string | number) => {
  try {
    const response = await fetch(`${BASE_URL}/block/${id}`);
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    return null;
  }
};