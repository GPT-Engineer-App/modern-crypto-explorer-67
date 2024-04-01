import React, { useState, useEffect } from "react";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import NewsCard from "../components/news/NewsCard";

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=EN");
        const data = await response.json();
        setNewsData(data.Data);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <Box px={8} py={4} maxWidth="1200px" mx="auto">
      <Heading as="h1" size="xl" mt={10} mb={4} textAlign="center">
        Latest Crypto News
      </Heading>
      <Text fontSize="lg" mb={8} textAlign="center">
        Stay up-to-date with the latest happenings in the world of cryptocurrencies.
      </Text>
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
        {newsData.slice(0, 15).map((newsItem, index) => (
          <NewsCard key={index} newsItem={newsItem} />
        ))}
      </Grid>
    </Box>
  );
};

export default NewsPage;
