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
          settingsKey="threewords"
          label="Show What3Words"
        />
        <Text bold align="center">Text Color</Text>
        <ColorSelect
          label="Text Color"
          settingsKey="text-color"
          colors={[
            {color: "black"},
            {color: "white"},
            {color: "grey"},
            {color: "#ADFF2F"},
            {color: "deepskyblue"},
            {color: "plum"}
          ]}
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
        <Text>There is a What3Words default key that will be used, if you prefer to use your own, add it here.</Text>
         <TextInput
            label="What 3 Words API Key"
            settingsKey="w3wapikey"
          />
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
