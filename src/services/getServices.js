export const getServices = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/services/api/get-all`
    );
    const services = res.json();
    return services;
  } catch (error) {
    return [];
  }
};

export const getServiceDetails = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/services/api/${id}`
    );
    const service = res.json();
    return service;
  } catch (error) {
    return {};
  }
};
