import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import ShowsSearch from "./ShowsSearch";
import { fetchShowId } from "../store/showsThunks";

interface Props {
    showId: number;
}

const ShowPage: React.FC<Props> = ({ showId }) => {
    const dispatch = useAppDispatch();
    const selectedShow = useAppSelector((state: RootState) => state.shows.payload);
    const fetchLoading = useAppSelector((state: RootState) => state.shows.fetchLoading);

    useEffect(() => {
        dispatch(fetchShowId(showId));
        
    }, [dispatch, showId]);
    
    if (fetchLoading) {
        return <div>Loading...</div>;
    }
    
    return (
        <main>
            <ShowsSearch />
            <br />
            {selectedShow && (
                <>
                    <img src={selectedShow.image} className="img-thumbnail" alt={selectedShow.name} />
                    <h2 className="h2">{selectedShow.name}</h2>
                    <p><strong>{selectedShow.summary}</strong></p>
                </>
            )}
        </main>
    );
}

export default ShowPage;
