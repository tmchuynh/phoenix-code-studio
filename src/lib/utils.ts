import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
