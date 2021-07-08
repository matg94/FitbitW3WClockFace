function mySettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Simple W3W ClockFace</Text>}>
        <Toggle
          settingsKey="heartRed"
          label="Set Heart Red"
         />
        <Toggle 
          settingsKey="textWhite"
          label="Set Text White"
        />
        <Toggle
          settingsKey="threewords"
          label="Show What3Words"
        />
        <Text bold align="center">Circle Color</Text>
        <ColorSelect
          label="Circle Color"
          settingsKey="circle-color"
          colors={[
            {color: "black"},
            {color: "white"},
            {color: "grey"},
            {color: "#ADFF2F"},
            {color: "deepskyblue"},
            {color: "plum"}
          ]}
        />
        <Text bold align="center">Central Dot Color</Text>
        <ColorSelect
          label="Central Dot Color"
          settingsKey="centraldot-color"
          colors={[
            {color: "black"},
            {color: "white"},
            {color: "grey"},
            {color: "#ADFF2F"},
            {color: "deepskyblue"},
            {color: "plum"}
          ]}
        />
        <Text bold align="center">Background Color</Text>
        <ColorSelect
          label="Background Color"
          settingsKey="background-color"
          colors={[
            {color: "black"},
            {color: "white"},
            {color: "grey"},
            {color: "#ADFF2F"},
            {color: "deepskyblue"},
            {color: "plum"}
          ]}
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
