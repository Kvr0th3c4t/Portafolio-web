import React from 'react';
import { useBadges } from "../../hooks/useBadges";

export const Badges = ({ type, className = '' }) => {
    const { getBadge } = useBadges();

    if (!type) {
        return null;
    }

    const badge = getBadge(type);

    if (!badge) {
        return (
            <span className={`rounded-lg px-2 py-1 me-2 text-xs bg-gray-500 text-white ${className}`}>
                {type}
            </span>
        );
    }

    return (
        <span
            className={`rounded-lg px-1 py-1 min-w-25 text-xs font-medium inline-flex justify-center items-center gap-1 ${badge.textColor} ${badge.background} ${className}`}
        >
            {badge.img && (
                <img
                    src={badge.img}
                    alt={badge.text}
                    className="w-4 h-4"
                />
            )}
            {badge.text}
        </span>
    );
};