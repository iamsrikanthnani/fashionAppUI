import React from 'react';
import {Image, Dimensions} from 'react-native';
import {Button, AuthNavigationProps} from '../../components';
import {Box, Text, useTheme} from '../../components/Theme';
import {BorderlessButton} from 'react-native-gesture-handler';
import {People4} from '../../assets/img';
import {Theme} from '../../components/Theme'
const picture = {
  src: People4,
  width: 653,
  height: 772,
};

const {width} = Dimensions.get('window');
export const assets = [picture.src];

const Welcome = ({navigation}: AuthNavigationProps<'Welcome'>) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        alignItems="center"
        justifyContent="flex-end">
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          position="absolute"
          top={0}
          bottom={0}
          right={0}
          left={0}
        />
        <Box
          flex={1}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl">
          <Text variant="title2">Let's get started!</Text>
          <Text variant="body" textAlign="center">
            Login to your account below or sign up for amazing experience
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            variant="default"
            label="Join us, it's free"
            onPress={() => navigation.navigate('SignUp')}
          />
          <BorderlessButton
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text variant="button" color="secondary">
              Forget password?
            </Text>
          </BorderlessButton>
        </Box>
      </Box>
    </Box>
  );
};
export default Welcome;
