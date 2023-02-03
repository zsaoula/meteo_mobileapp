import React from "react";
import { FontAwesome } from "@expo/vector-icons";


export function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    var sizeIcon = 30
    if(props.name=='heart'){
        sizeIcon = 25
    }
    return <FontAwesome size={sizeIcon} {...props} />;
}