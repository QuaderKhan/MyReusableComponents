import React, { useState } from "react";

export interface SearchableDropdownOption {
    label: string;
    value: string;
}

interface SearchableDropdownProps {
    options: SearchableDropdownOption[];
    onSelect?: (value: string) => void;
    placeholder?: string;
}

export const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
    options,
    onSelect,
    placeholder = "Type or select...",
}) => {
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);

    const filtered = options.filter((opt) =>
        opt.label.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="q-searchable-dropdown">
            <input
                type="text"
                value={search}
                placeholder={placeholder}
                onFocus={() => setOpen(true)}
                onChange={(e) => setSearch(e.target.value)}
                onBlur={() => setTimeout(() => setOpen(false), 150)} // slight delay to allow click
                className="q-searchable-dropdown-input"
            />
            {open && (
                <ul className="q-searchable-dropdown-list">
                    {filtered.length > 0 ? (
                        filtered.map((option) => (
                            <li
                                key={option.value}
                                onClick={() => {
                                    setSearch(option.label);
                                    onSelect?.(option.value);
                                    setOpen(false);
                                }}
                                className="q-searchable-dropdown-item"
                            >
                                {option.label}
                            </li>
                        ))
                    ) : (
                        <li className="q-searchable-dropdown-empty">No results</li>
                    )}
                </ul>
            )}
        </div>
    );
};
