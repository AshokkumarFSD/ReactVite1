import Header from "../components/Header";
import InterviewCards from "../components/InterviewCards";
import MainComp from "../components/MainComp";
import SearchBar from "../components/SearchBar";

export default function LandingPage({ data }) {
  return (
    <div>
      <Header>
        <SearchBar />
      </Header>
      <MainComp>
        <InterviewCards data={data} />
      </MainComp>
    </div>
  );
}