import React, { useState, useMemo, useCallback } from "react";
import { Table, Typography, Avatar } from "antd";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import "./DealList.css";

const { Text } = Typography;

const ClientCell = React.memo(({ initials, client }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <Avatar className="client-avatar">{initials}</Avatar>
    <Text strong style={{ marginLeft: 8 }}>{client}</Text>
  </div>
));

const DealsList = ({ deals }) => {
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);

  const onExpand = useCallback((expanded, record) => {
    setExpandedRowKeys(expanded ? [record.key] : []);
  }, []);

  const expandIcon = useCallback(({ expanded, onExpand, record }) =>
    expanded ? (
      <UpOutlined onClick={(e) => onExpand(record, e)} style={{ fontSize: 12, marginRight: 8 }} />
    ) : (
      <DownOutlined onClick={(e) => onExpand(record, e)} style={{ fontSize: 12, marginRight: 8 }} />
    )
  , []);

  const expandedRowRender = useCallback((record) => {
    const childColumns = [
      {
        title: "Client",
        dataIndex: "client",
        key: "client",
        render: (text, row) => <ClientCell initials={row.initials} client={text} />,
      },
      { title: "Deal Name", dataIndex: "dealName", key: "dealName" },
      { title: "Deal Budget", dataIndex: "budget", key: "budget" },
      { title: "Assignee", dataIndex: "assignee", key: "assignee" },
    ];

    return (
      <div style={{ overflowX: "auto" }}>
        <Table
          columns={childColumns}
          dataSource={record.data}
          pagination={false}
          rowKey={(row) => row._id} 
        />
      </div>
    );
  }, []);

  const columns = useMemo(() => [
    {
      dataIndex: "stage",
      key: "stage",
      render: (text, record) => {
        const totalBudget = record.data.reduce((sum, deal) => {
          const budget = parseFloat(deal.budget.replace("$", "").replace(/,/g, ""));
          return isNaN(budget) ? sum : sum + budget;
        }, 0);

        return (
          <Text strong style={{ fontSize: 16 }}>
            {text} <Text type="secondary">({record.data.length})</Text>
            <Text type="secondary" style={{ marginLeft: 8 }}>
              ${totalBudget.toLocaleString()}
            </Text>
          </Text>
        );
      },
    },
  ], []);

  const dataSource = useMemo(
    () => deals.map((item, index) => ({ ...item, key: index })), // Using _id as key for parent table
    [deals]
  );

  return (
    <div className="deals-list">
      <Table
        columns={columns}
        dataSource={dataSource}
        expandable={{
          expandedRowRender,
          expandedRowKeys,
          onExpand,
          expandIcon,
        }}
        bordered={false}
        pagination={false}
        showHeader={false}
      />
    </div>
  );
};

export default React.memo(DealsList);