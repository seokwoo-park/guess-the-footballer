import { AVAILABLE_LEAGUES_TO_START } from "@/constants/home";
import { InGameContextProvider } from "@/context/InGameContext";

export async function generateStaticParams() {
  return AVAILABLE_LEAGUES_TO_START.map(({ id }) => ({
    leagueId: id.toString(),
  }));
}

const InGameLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { leagueId: string };
}) => {
  return (
    <InGameContextProvider leagueId={params.leagueId}>
      {children}
    </InGameContextProvider>
  );
};

export default InGameLayout;
