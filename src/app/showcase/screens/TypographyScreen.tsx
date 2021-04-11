import React from 'react';
import { ScrollView } from 'react-native';
import Heading from '../../../ui/atoms/typography/Heading';
import Hero from '../../../ui/atoms/typography/Hero';
import Label from '../../../ui/atoms/typography/Label';
import Paragraph from '../../../ui/atoms/typography/ParaGraph';
import SubHeading from '../../../ui/atoms/typography/SubHeading';
import Uppercase from '../../../ui/atoms/typography/Uppercase';

const TypographyScreen = () => {
  return (
    <ScrollView>
      <Hero type='xl'>Hero 1</Hero>
      <Hero type='lg'>Hero 2</Hero>
      <Hero type='md'>Hero 3</Hero>
      <Hero type='sm'>Hero 4</Hero>
      <Hero type='xs'>Hero 5</Hero>
      <Heading type='xl'>Heading 1</Heading>
      <Heading type='lg'>Heading 2</Heading>
      <Heading type='md'>Heading 3</Heading>
      <Heading type='sm'>Heading 4</Heading>
      <Heading type='xs'>Heading 5</Heading>
      <SubHeading type='xl'>SubHeading 1</SubHeading>
      <SubHeading type='lg'>SubHeading 2</SubHeading>
      <SubHeading type='md'>SubHeading 3</SubHeading>
      <SubHeading type='sm'>SubHeading 4</SubHeading>
      <Paragraph type='xl'>Paragraph 1</Paragraph>
      <Paragraph type='lg'>Paragraph 2</Paragraph>
      <Paragraph type='md'>Paragraph 3</Paragraph>
      <Paragraph type='sm'>Paragraph 4</Paragraph>
      <Label type='1'>Label 1</Label>
      <Label type='2'>Label 2</Label>
      <Label type='3'>Label 3</Label>
      <Label type='4'>Label 4</Label>
      <Label type='5'>Label 5</Label>
      <Label type='6'>Label 6</Label>
      <Label type='7'>Label 7</Label>
      <Label type='8'>Label 8</Label>
      <Uppercase type='xl'>Uppercase 1</Uppercase>
      <Uppercase type='lg'>Uppercase 2</Uppercase>
      <Uppercase type='md'>Uppercase 3</Uppercase>
      <Uppercase type='sm'>Uppercase 4</Uppercase>
    </ScrollView>
  );
};

export default TypographyScreen;
