import React, { useState, useEffect } from 'react';
import { AsyncPaginate } from "react-select-async-paginate";
import { options, baseUrl } from '../../api';


const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState(null);
    const [players, setFormattedOptions] = useState([]);
    const [player_search, setPlayerSearch] = useState([]);
    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                console.log(baseUrl);
                const response = await fetch(baseUrl);
                const data = await response.json();
                const players_data = (data || []).filter(player => player.Status === 'Active');
                const players = players_data.map(player =>({
                player_id: player.PlayerID,
                team: player.Team,
                number: player.Number,
                position: player.Position,
                height: player.Height,
                weight: player.Weight,
                birth_date: player.BirthDate,
                college: player.College,
                experience: player.Experience,
                name: player.Name,
                age: player.Age,
                image: player.UsaTodayHeadshotUrl
                }));
                let player_search = players.map(player => ({
                value: player.name,
                label: `${player.name} (${player.team}) - ${player.position}`,
                }));
                player_search = player_search.sort()
                setPlayerSearch(player_search);
                setFormattedOptions(players);
            } catch (err) {
                console.error(err);
                setFormattedOptions([]);
            }
        };
        fetchPlayers();
    }, []);

    const loadOptions = async (inputValue) => {
        return { options: player_search };
    };

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };
    return (
        <AsyncPaginate
            placeholder="Search for a player"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
}

export default Search;