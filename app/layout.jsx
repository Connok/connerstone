import "@/assets/styles/globals.css";

export const metadata = {
  title: "Connerstone | Find The Perfect Rental",
  description: "Find yourr dream rental Property",
  keywords: "rental, find rentals, find properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <div>{children}</div>
    </html>
  );
};

export default MainLayout;
