import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  ScrollView,
} from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { DataTable, Card, Button, Avatar } from "react-native-paper";

import { useState, useEffect } from "react";
import { PaperProvider } from "react-native-paper";

//css
import Styles from "../css/schedule";
export default function Schedule() {
  const [page, setPage] = useState<number>(0);
  const [numberOfItemsPerPageList] = useState([8, 16, 24]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );
  const info = require("../json/notification.json");

  // const [items] = useState([
  //   {
  //     key: 1,
  //     host: 'Cupcake',
  //     purpose:'Give lunch',
  //     date: "11-12-2024",
  //     time:'12:00 pm'

  //   },
  //   {
  //     key: 2,
  //     host: 'Eclair',
  //     purpose:'Give lunch',
  //     date: "11-12-2024",
  //     time:'12:00 pm'

  //   },
  //   {
  //     key: 3,
  //     host: 'Frozen yogurt',
  //     purpose:'Give lunch',
  //     date: "11-12-2024",
  //     time:'12:00 pm'
  //   },
  //   {
  //     key: 4,
  //     host: 'Gingerbread',
  //     purpose:'Give lunch',
  //     date: "11-12-2024",
  //     time:'12:00 pm'

  //   },
  //  ]);

  //  const from = page * itemsPerPage;
  //  const to = Math.min((page + 1) * itemsPerPage, items.length);

  //  useEffect(() => {
  //   setPage(0);
  // }, [itemsPerPage]);

  const scheduleData = [
    {
      hostname: "Server1",
      date: "2024-12-08T14:30:00Z",
      purpose: "Maintenance",
    },
    {
      hostname: "Server2",
      date: "2024-12-09T10:00:00Z",
      purpose: "Update",
    },
  ];

  return (
    <ScrollView>
      <View style={Styles.mainContainer}>
        {info.map((item: any, index: any) => (
          <View key={index} style={Styles.scheduleCard}>
            <View style={Styles.info2}>
              <Text style={Styles.purpose}>{item.visitPurpose}</Text>
              <Text style={Styles.email}>{item.email}</Text>
            </View>
            <View style={Styles.info1}>
              <Text style={Styles.hostname}>{item.date}</Text>
              <Text style={Styles.date_time}>{item.time}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
