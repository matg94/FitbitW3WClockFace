function mySettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">TFL Settings</Text>}>
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
        <Toggle
          settingsKey="centraldot"
          label="Show Central Dot"
        />
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
