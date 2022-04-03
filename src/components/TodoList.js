import React from 'react';
import { VStack, HStack, Text, IconButton, StackDivider, Spacer, Badge, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaTrash } from "react-icons/fa"

function TodoList({ todos, deleteTodo }) {

    if (!todos.length) {
        return (
            <motion.div
                animate={{ y: [100, 0], duration: 0.25, opacity: [0, 1] }}>
                <Badge colorScheme="teal" p="4" borderRadius="lg">
                    No task for now ! 😀
                </Badge>
            </motion.div>
        )
    }

    return (
        <Box width="full" align='center'>

            <VStack
                divider={<StackDivider />}
                borderColor="blue.100"
                borderWidth="3px"
                p="4"
                borderRadius="lg"
                w="100%"
                maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
                alignItems='stretch'>
                {todos.map(todo => (

                    <HStack key={todo.id}>
                        <motion.div
                            animate={{ x: [-100, 0], opacity: [0, 1]}}>
                            <Text noOfLines={[3, 3, 3]}>{todo.content}</Text>
                        </motion.div>
                        <Spacer />
                        <motion.div
                            animate={{ x: [100, 0], opacity: [0, 1] }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            <IconButton
                                colorScheme="red"
                                icon={<FaTrash />}
                                isRound='true'
                                onClick={() => deleteTodo(todo.id)}
                            />
                        </motion.div>
                    </HStack>
                ))
                }
            </VStack>
        </Box>
    );
}

export default TodoList;
