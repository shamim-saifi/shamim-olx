import {
    Box,
    Button,
    HStack,
    Img,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Drawer, DrawerBody, DrawerContent, DrawerHeader,
    DrawerOverlay, IconButton, DrawerCloseButton, VStack, Heading, Text, useDisclosure, Avatar,

} from '@chakra-ui/react'

import { ChevronDownIcon, ChevronUpIcon, HamburgerIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import logo from '../../Img/OLX-01.png'
import { BiCamera, BiHeart, BiHelpCircle, BiMessage, BiPlanet, BiSearch, BiUser, BiMobile, BiHome, BiChair } from 'react-icons/bi'
import { AiFillCamera, AiFillCar } from 'react-icons/ai'
import { ImProfile } from 'react-icons/im'
import { RiMotorbikeFill, RiComputerFill, RiTShirtFill, RiAdminFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import './Nav.css'
import SellButton from '../Home/SellButton'

const Nav = () => {

    const [arrow, setArrow] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const allListMenuHandler = () => {
        var list = document.getElementById('showAllListMenu')
        if (list.style.display === 'none') {
            list.style.display = 'block'
            setArrow(true)
        } else {
            list.style.display = 'none'
            setArrow(false)
        }
    }
    return (
        <>
            <HStack position={'sticky'} left={'0'} top={'0'} zIndex={'10'} h={'10vh'} w={'100%'} bgColor={'gray.100'} p={'2'} justifyContent={['space-between', 'none']} alignItems={'center'}>
                {/* it is manu btn which will show in phone size */}
                <Box ml={['5vmax', '0']} display={'flex'} justifyContent={'center'} alignItems={'center'} boxSize={['10%', '5%']}>
                    <Img src={logo} />
                    <Box display={['block', 'none']} ml={'1vmax'}>
                        <Button as={IconButton} icon={<HamburgerIcon />} onClick={onOpen} />
                        <Drawer placement='left' onClose={onClose} isOpen={isOpen} size={'full'}>
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerCloseButton />
                                <DrawerHeader mt={'2.5vmax'} >
                                    <HStack justifyContent={'center'} alignItems={'center'} >
                                        <Avatar bg='red.500' icon={<BiUser fontSize='1.5rem' />} />
                                        <VStack justifyContent={'center'} alignItems={'flex-start'}>
                                            <Heading size={'2vmax'} >Welcome to OLX</Heading>
                                            <Text fontSize={'2vmax'}>Take charge of your buying and selling journey</Text>
                                        </VStack>
                                    </HStack>
                                </DrawerHeader>
                                <DrawerBody>
                                    <VStack alignItems={'flex-start'}  >
                                        <Button variant={'ghost'} ><BiCamera size={'5vmax'} />Start Selling</Button>
                                        <Button variant={'ghost'} ><BiHeart size={'5vmax'} />My ADS</Button>
                                        <Button variant={'ghost'} ><BiMessage size={'5vmax'} />Chat</Button>
                                        <Button variant={'ghost'} ><BiHelpCircle size={'5vmax'} />Help</Button>
                                        <Button variant={'ghost'} ><BiPlanet size={'5vmax'} />Select Language</Button>
                                        <Button w={'full'} variant={'solid'} colorScheme='twitter' >Login</Button>
                                        <Button w={'full'} variant={'solid'} colorScheme='whatsapp'  >
                                            <Link to={'https://shamim-saifi.vercel.app'} target='_blank' >
                                                SHAMIM ADMIN
                                            </Link>
                                        </Button>
                                    </VStack>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>

                    </Box>
                </Box>



                <Box border={'2px solid #001d23'} w={'20%'} borderRadius={'7px'} display={['none', 'flex']} flexShrink={'1'}  >
                    <Box  borderRadius={'7px'} w={'30px'}  bgColor={'white'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                        <BiSearch fontSize={['2vmax','3.3vmax']} color='#001d23' cursor={'pointer'} />
                    </Box>
                    <Input variant={'unstyled'} padding={'8px'} bgColor={'white'} type='search' placeholder='your Location' />
                    <Box borderRadius={'7px'} w={'30px'} bgColor={'white'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                        <ChevronDownIcon fontSize={['2vmax','3vmax']} color='#001d23' cursor={'pointer'} />
                    </Box>
                </Box>

                <Box border={'2px solid #001d23'} w={'40%'} borderRadius={'7px'} display={['none', 'flex']} flexShrink={'2'} >

                    <Input variant={'unstyled'} padding={'8px'} bgColor={'white'} borderRadius={'5px 0 0 5px'} type='search' placeholder='Find Cars, Mobile Phones and More ' display={['none', 'block']} />
                    <Box borderRadius={'0 5px 5px 0'} w={'50px'} border={'2px solid #001d23'} bgColor='#001d23' display={'flex'} alignItems={'center'} justifyContent={'center'} >
                        <BiSearch fontSize={'2vmax'} color='white' cursor={'pointer'} />
                    </Box>
                </Box>

                <Box  display={['none', 'flex']}  >
                    <Menu >
                        {({ isOpen }) => (
                            <>
                                <MenuButton  fontSize={['sm','md','lg','xl']} color={'#001d23'} variant={'link'} isActive={isOpen} as={Button} rightIcon={isOpen ? <ChevronUpIcon boxSize={['2vmax','2.5vmax']} /> : <ChevronDownIcon boxSize={['2vmax','2.5vmax']} />}>
                                    English
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>English</MenuItem>
                                    <MenuItem>Hindi</MenuItem>
                                </MenuList>
                            </>
                        )}
                    </Menu>
                </Box>

                <Box  display={['none', 'flex']} alignItems={'center'}>
                    <Button  variant={'link'} color={'#001d23'} fontSize={['sm','md','lg','xl']} >Login</Button>
                </Box>


                <SellButton />




            </HStack>



            <div className='subNav'>
                <div id='languageContainer'>
                    <p onClick={allListMenuHandler}>ALL CATEGORIES'{arrow ? <ChevronUpIcon /> : <ChevronDownIcon />}</p>

                </div>
                <div className='subNavItem'>
                    <Link to={'/'} >Cars</Link>
                    <Link to={'/'} >Motorcycles</Link>
                    <Link to={'/'} >Mobile Phones</Link>
                    <Link to={'/'} >For Sale: Houses & Apartments</Link>
                    <Link to={'/'} >Scooters</Link>
                    <Link to={'/'} >Commercial & Other Vehicles</Link>
                    <Link to={'/'} >For Rent: Houses & Apartments</Link>
                </div>

                <HStack id='subIconItem' m={'1vmax 0'} overflow={'auto'}  >
                    <VStack justifyContent={'center'} alignItems={'center'} >
                        <Button variant={'link'} colorScheme='blackAlpha' >
                            <Link to={'https://shamim-saifi.vercel.app'} target='_blank' >
                                <RiAdminFill size={'6vmax'} />

                            </Link>

                        </Button>
                        <Text fontSize={'2.5vmax'}>
                            <Link to={'https://shamim-saifi.vercel.app'} target='_blank' >
                                SHAMIM
                            </Link>
                        </Text>
                    </VStack>
                    <VStack justifyContent={'center'} alignItems={'center'} >
                        <Button variant={'link'} colorScheme='facebook' ><AiFillCar size={'6vmax'} /></Button>
                        <Text fontSize={'2.5vmax'} >car</Text>
                    </VStack>
                    <VStack justifyContent={'center'} alignItems={'center'} >
                        <Button variant={'link'} colorScheme='whatsapp' ><AiFillCamera size={'6vmax'} /></Button>
                        <Text fontSize={'2.5vmax'}>camera</Text>
                    </VStack>
                    <VStack justifyContent={'center'} alignItems={'center'} >
                        <Button variant={'link'} colorScheme='linkedin' ><BiHome size={'6vmax'} /></Button>
                        <Text fontSize={'2.5vmax'}>properties</Text>
                    </VStack>
                    <VStack justifyContent={'center'} alignItems={'center'} >
                        <Button variant={'link'} colorScheme='cyan' ><BiMobile size={'6vmax'} /></Button>
                        <Text fontSize={'2.5vmax'}>mobile</Text>
                    </VStack>
                    <VStack justifyContent={'center'} alignItems={'center'} >
                        <Button variant={'link'} colorScheme='orange' ><ImProfile size={'6vmax'} /></Button>
                        <Text fontSize={'2.5vmax'}>jobs</Text>
                    </VStack>
                    <VStack justifyContent={'center'} alignItems={'center'} >
                        <Button variant={'link'} colorScheme='black' ><RiMotorbikeFill size={'6vmax'} /></Button>
                        <Text fontSize={'2.5vmax'}>Bikes</Text>
                    </VStack>
                    <VStack justifyContent={'center'} alignItems={'center'} >
                        <Button variant={'link'} colorScheme='yellow' ><RiComputerFill size={'6vmax'} /></Button>
                        <Text fontSize={'2.5vmax'}>Electronics</Text>
                    </VStack>
                    <VStack justifyContent={'center'} alignItems={'center'} >
                        <Button variant={'link'} colorScheme='red' ><BiChair size={'6vmax'} /></Button>
                        <Text fontSize={'2.5vmax'}>Furniture</Text>
                    </VStack>
                    <VStack justifyContent={'center'} alignItems={'center'} >
                        <Button variant={'link'} colorScheme='blue' ><RiTShirtFill size={'6vmax'} /></Button>
                        <Text fontSize={'2.5vmax'}>Fashion</Text>
                    </VStack>



                </HStack>
            </div>

            <div id='showAllListMenu' >
                <div className='allListMenu'>
                    <div>
                        <div className='underMenuItem'>
                            <p>Properties</p>
                            <Link to={'/'}>For Sale: Houses & Apartments</Link>
                            <Link to={'/'}>For Rent: Houses & Apartments</Link>
                            <Link to={'/'}>Lands & Plots</Link>
                            <Link to={'/'}>For Rent: Shops & Offices</Link>
                            <Link to={'/'}>For Sale: Shops & Offices</Link>
                            <Link to={'/'}>PG & Guest Houses</Link>
                        </div>
                        <div className='underMenuItem'>
                            <p>Mobiles</p>
                            <Link to={'/'}>Mobile Phones</Link>
                            <Link to={'/'}>Accessories</Link>
                            <Link to={'/'}>Tablets</Link>
                        </div>
                    </div>
                    <div className='underMenuItem'>
                        <p>Jobs</p>
                        <Link to={'/'}>Data entry & Back office</Link>
                        <Link to={'/'}>Sales & Marketing</Link>
                        <Link to={'/'}>BPO & Telecaller</Link>
                        <Link to={'/'}>Driver</Link>
                        <Link to={'/'}>Office Assistant</Link>
                        <Link to={'/'}>Delivery & Collection</Link>
                        <Link to={'/'}>Teacher</Link>
                        <Link to={'/'}>Cook</Link>
                        <Link to={'/'}>Receptionist & Front office</Link>
                        <Link to={'/'}>IT Engineer & Developer</Link>
                        <Link to={'/'}>Hotel & Travel Executive</Link>
                        <Link to={'/'}>Accountant</Link>
                        <Link to={'/'}>Designer</Link>
                        <Link to={'/'}>Other Jobs</Link>
                    </div>
                    <div>
                        <div className='underMenuItem'>
                            <p>Electronics & Appliances</p>
                            <Link to={'/'}>TVs, Video - Audio</Link>
                            <Link to={'/'}>Kitchen & Other Appliances</Link>
                            <Link to={'/'}>Computers & Laptops</Link>
                            <Link to={'/'}>Cameras & Lenses</Link>
                            <Link to={'/'}>Games & Entertainment</Link>
                            <Link to={'/'}>Fridges</Link>
                            <Link to={'/'}>Computer Accessories</Link>
                            <Link to={'/'}>Hard Disks, Printers & Monitors</Link>
                            <Link to={'/'}>ACs</Link>
                            <Link to={'/'}>Washing Machines</Link>
                        </div>
                        <div className='underMenuItem'>
                            <p>Commercial Vehicles & Spares</p>
                            <Link to={'/'}>Commercial & Other Vehicles</Link>
                            <Link to={'/'}>Spare Parts</Link>
                        </div>
                    </div>
                    <div>
                        <div className='underMenuItem'>
                            <p>Books, Sports & Hobbies</p>
                            <Link to={'/'}>Books</Link>
                            <Link to={'/'}>Gym & Fitness</Link>
                            <Link to={'/'}>Musical Instruments</Link>
                            <Link to={'/'}>Sports Equipment</Link>
                            <Link to={'/'}>Other Hobbies</Link>
                        </div>
                        <div className='underMenuItem'>
                            <p>Pets</p>
                            <Link to={'/'}>Fishes & Aquarium</Link>
                            <Link to={'/'}>Pet Food & Accessories</Link>
                            <Link to={'/'}>Dogs</Link>
                            <Link to={'/'}>Other Pets</Link>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Nav