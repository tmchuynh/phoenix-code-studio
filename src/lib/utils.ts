import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import React from 'react';

export function cn( ...inputs: ClassValue[] ) {
  return twMerge( clsx( inputs ) );
}

export const formatCurrency = ( value: number ) => {
  if ( isNaN( value ) ) return "$0.00";

  return "$" + value.toLocaleString( undefined );
};

export const capitalize = ( str: string ) => {
  return str.replace( /-/g, " " ).replace( /\b\w/g, ( char ) => char.toUpperCase() );
};

export const formatQuotes = ( quote: string ): string[] => {
  return quote
    .split( "\n" ) // Split the quote at newlines
    .map( ( paragraph ) => paragraph.trim() ) // Trim spaces from each paragraph
    .filter( ( paragraph ) => paragraph !== "" ); // Remove empty paragraphs
};

export const formatQuote = ( quote: string ): string[] => {
  return quote
    .split( "\n" ) // Split the quote by newlines
    .map( ( paragraph ) => paragraph.trim() ) // Trim the spaces
    .filter( ( paragraph ) => paragraph !== "" ); // Remove any empty paragraphs
};

export const formatDate = ( dateString: string ): string => {
  const date = new Date( dateString );
  const year = date.getFullYear();
  const month = ( date.getMonth() + 1 ).toString().padStart( 2, "0" ); // Adding leading zero for single digit months
  const day = date.getDate().toString().padStart( 2, "0" ); // Adding leading zero for single digit days

  return `${ year }-${ month }-${ day }`;
};