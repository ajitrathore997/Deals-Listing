import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Layout, message } from "antd";
import Header from "../components/Header/Header";
import Filters from "../components/Filter/Filters";
import DealsList from "../components/DealsList/DealsList";
import ContentX from "../components/Content/Content";
import "./App.css";
import { getDeals, getAssignees, getStages } from "../api/dealService";
import _ from "lodash";

const { Content } = Layout;

const Home = () => {
  const [deals, setDeals] = useState([]);
  const [assignees, setAssignees] = useState([]);
  const [stages, setStages] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    assignee: "",
    stage: "",
    dateRange: [],
  });

  useEffect(() => {
    getAssignees().then((res) => setAssignees(res.data));
    getStages().then((res) => setStages(res.data));
  }, []);

  const debouncedFetchDeals = useCallback(
    _.debounce((params) => {
      getDeals(params)
        .then((res) => setDeals(res.data.deals || res.data))
        .catch(() => message.error("Error fetching deals"));
    }, 300),
    []
  );

  useEffect(() => {
    const params = _.cloneDeep(filters);
    if (!_.isEmpty(params)) {
      debouncedFetchDeals(params);
    }
  }, [filters, debouncedFetchDeals]);

  const handleFilterChange = useCallback((key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleClearFilters = useCallback(() => {
    setFilters(
      _.cloneDeep({ search: "", assignee: "", stage: "", dateRange: [] })
    );
  }, []);

  const { totalBudget, totalDeals } = useMemo(() => {
    let budgetSum = 0;
    let dealCount = 0;

    deals.forEach((group) => {
      group.data.forEach((deal) => {
        const budget = parseFloat(
          deal.budget.replace("$", "").replace(/,/g, "")
        );
        if (!isNaN(budget)) {
          budgetSum += budget;
        }
        dealCount += 1;
      });
    });

    return {
      totalBudget: budgetSum.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      }),
      totalDeals: dealCount,
    };
  }, [deals]);

  return (
    <Layout>
      <Header />
      <Content className="main-content">
        <ContentX />
        <Filters
          filters={filters}
          onChange={handleFilterChange}
          onClear={handleClearFilters}
          assignees={assignees}
          stages={stages}
          totalBudget={totalBudget}
          totalDeals={totalDeals}
        />
        <DealsList deals={deals} />
      </Content>
    </Layout>
  );
};

export default Home;
