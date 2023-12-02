import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useOAuth } from "@clerk/clerk-expo";

enum Strategy {
  Google = "oauth_google",
  Facebook = "oauth_facebook",
  Github = "oauth_github",
  Tiktok = "oauth_tiktok",
  Apple = "oauth_apple",
}

const login = () => {
  useWarmUpBrowser();
  const router = useRouter();

  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
  const { startOAuthFlow: facebookAuth } = useOAuth({
    strategy: "oauth_facebook",
  });
  const { startOAuthFlow: githubAuth } = useOAuth({ strategy: "oauth_github" });
  const { startOAuthFlow: tiktokAuth } = useOAuth({ strategy: "oauth_tiktok" });
  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: "oauth_apple" });

  const onSelectAuth = async (strategy: Strategy) => {
    const selectedAuth = {
      [Strategy.Google]: googleAuth,
      [Strategy.Facebook]: facebookAuth,
      [Strategy.Github]: githubAuth,
      [Strategy.Tiktok]: tiktokAuth,
      [Strategy.Apple]: appleAuth,
    }[strategy];

    try {
      const { createdSessionId, setActive } = await selectedAuth();
      console.log(createdSessionId);

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      }
    } catch (err) {
      console.error(`OAtuh error: ${err}`);
      console.log(`${err} Error`);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="Email"
        style={[defaultStyles.inputField, { marginBottom: 30, marginTop: 20 }]}
      />
      <TouchableOpacity style={defaultStyles.btn}>
        <Text style={defaultStyles.btnText}>Continue</Text>
      </TouchableOpacity>

      <View style={styles.seperatorView}>
        <View
          style={{
            flex: 1,
            borderBottomColor: "#000",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <Text style={styles.seperator}>or</Text>
        <View
          style={{
            flex: 1,
            borderBottomColor: "#000",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </View>

      <View style={{ gap: 20 }}>
        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => onSelectAuth(Strategy.Google)}
        >
          <Ionicons
            name="md-logo-google"
            style={defaultStyles.btnIcon}
            size={24}
          />
          <Text style={styles.btnOutlineText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => onSelectAuth(Strategy.Facebook)}
        >
          <Ionicons
            name="md-logo-facebook"
            style={defaultStyles.btnIcon}
            size={24}
          />
          <Text style={styles.btnOutlineText}>Continue with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => onSelectAuth(Strategy.Github)}
        >
          <Ionicons
            name="md-logo-github"
            style={defaultStyles.btnIcon}
            size={24}
          />
          <Text style={styles.btnOutlineText}>Continue with Github</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => onSelectAuth(Strategy.Tiktok)}
        >
          <FontAwesome5 name="tiktok" style={defaultStyles.btnIcon} size={24} />
          <Text style={styles.btnOutlineText}>Continue with Tiktok</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => onSelectAuth(Strategy.Apple)}
        >
          <Ionicons
            name="md-logo-apple"
            style={defaultStyles.btnIcon}
            size={24}
          />
          <Text style={styles.btnOutlineText}>Continue with Apple</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 26,
  },

  seperatorView: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 30,
  },
  seperator: {
    fontFamily: "mon-sb",
    color: Colors.grey,
    fontSize: 16,
  },
  btnOutline: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "mon-sb",
  },
});

export default login;
