"use client";

import { useNavigation } from "@/hooks/useNavigation";
import { SearchResult } from "@/lib/interfaces";
import {
  flattenNavigationForSearch,
  searchNavigation,
} from "@/lib/utils/search";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";

interface CommandSearchProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CommandSearch({
  open,
  onOpenChange,
}: CommandSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const { navigation } = useNavigation();
  const router = useRouter();

  const handleSelect = (href: string) => {
    router.push(href);
    onOpenChange(false);
    setSearchQuery("");
  };

  const handleOpenChange = (newOpen: boolean) => {
    onOpenChange(newOpen);
    if (!newOpen) {
      setSearchQuery("");
    }
  };

  // Flatten navigation for search
  const flattenedNavigation = useMemo(() => {
    return flattenNavigationForSearch(navigation);
  }, [navigation]);

  // Perform search when query changes
  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchNavigation(flattenedNavigation, searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, flattenedNavigation]);

  return (
    <CommandDialog
      open={open}
      onOpenChange={handleOpenChange}
      title="Search Navigation"
      description="Search for topics, categories, and pages..."
      className="max-w-[90%]"
    >
      <CommandInput
        placeholder="Search topics, categories, and pages..."
        value={searchQuery}
        onValueChange={setSearchQuery}
      />
      <CommandList>
        {!searchQuery.trim() && (
          <CommandEmpty>Start typing to search...</CommandEmpty>
        )}
        {searchQuery.trim() && searchResults.length === 0 && (
          <CommandEmpty>No results found for "{searchQuery}"</CommandEmpty>
        )}
        {searchResults.length > 0 && (
          <CommandGroup
            heading={`${searchResults.length} result${searchResults.length !== 1 ? "s" : ""} found`}
          >
            {searchResults.map((result, index) => (
              <CommandItem
                key={`${result.href}-${index}`}
                value={result.title}
                onSelect={() => handleSelect(result.href)}
                className="group cursor-pointer"
              >
                <div className="flex flex-col w-full">
                  <div className="font-medium">{result.title}</div>
                  <div className="flex items-center space-x-1 text-muted-foreground text-xs">
                    <span className="group-data-[selected=true]:text-background">
                      {result.section}
                    </span>
                    {result.breadcrumb.length > 1 && (
                      <>
                        <FaChevronRight className="h-2 w-2" />
                        {result.breadcrumb
                          .slice(0, -1)
                          .map((crumb, crumbIndex) => (
                            <span key={crumbIndex}>
                              {crumb}
                              {crumbIndex <
                                result.breadcrumb.slice(0, -1).length - 1 && (
                                <FaChevronRight className="mx-1 h-2 w-2" />
                              )}
                            </span>
                          ))}
                      </>
                    )}
                  </div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
}
