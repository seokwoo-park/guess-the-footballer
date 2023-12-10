import { AVAILABLE_LEAGUES_TO_START } from "@/constants/home";
import { fetchLeaguePlayers } from "@/utils/fetchers";

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
  const players = await fetchLeaguePlayers(params.leagueId);

  return <>{children}</>;
};

export default InGameLayout;
