import React, {useState, useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

export default function useDarkMode(key, initialValue) {
	const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

	useEffect(() => {
		darkMode
			? document.body.classList.add("dark-mode")
			: document.body.classList.remove("dark-mode");
	}, [darkMode]);

	return [darkMode, setDarkMode]
}
