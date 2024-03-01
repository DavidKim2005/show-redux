import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchShow, fetchShowId } from "../store/showsThunks";
import { Show } from "../types";
import { NavLink } from "react-router-dom";

const ShowsSearch = () => {
    const dispatch = useAppDispatch();
    const shows = useAppSelector((state) => state.shows.shows);
    const fetchLoading = useAppSelector((state) => state.shows.fetchLoading);
    const [searchName, setSearchName] = useState('');
    const [dropDown, setDropDown] = useState(false);

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setSearchName(inputValue);
        setDropDown(true);
    };

    const selectShow = (selectedShow: Show) => {
        setSearchName(selectedShow.name);
        setDropDown(false);
        dispatch(fetchShowId(selectedShow.id))
    };

    useEffect(() => {
        if (searchName !== '') {
            dispatch(fetchShow(searchName));
        }
    }, [dispatch, searchName]);

    return (
        <div className="position-relative">
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Find your show!</span>
                <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    value={searchName}
                    onChange={inputChange}
                />
                <button className="btn btn-primary">Search</button>
            </div>

            {searchName !== '' && (
                <div className="dropdown-menu show" style={{ position: 'absolute', width: '100%' }}>
                    {fetchLoading ? (
                        <div>Loading...</div>
                    ) : (
                        Object.values(shows).map((show: Show) => (
                            <NavLink
                                key={show.id}
                                className="dropdown-item"
                                to={`/show/${show.show.id}`}
                                onClick={() => selectShow(show)}
                            >
                                {show.show.name}
                            </NavLink>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default ShowsSearch;
