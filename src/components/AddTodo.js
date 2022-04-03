import React from 'react';
import { HStack, Input, Button, useToast } from "@chakra-ui/react"
import { motion } from 'framer-motion';
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { FaRegPlusSquare } from "react-icons/fa"

function AddTodo({ addTodo }) {

    const toast = useToast()

    function handleSubmit(e) {
        e.preventDefault();
        if (!content) {
            toast({
                title: 'No Task!',
                description: "You gotta add some task.",
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
            return
        }

        const todo = {
            id: nanoid(),
            content: content,
        }
        addTodo(todo)
        setContent('')
    }
    const [content, setContent] = useState('');

    return (
        <form onSubmit={handleSubmit}>
            <HStack mt='8'>
                <Input
                    variant="filled"
                    placeholder="Enter your task..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)} />
                <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}>
                    <Button leftIcon={<FaRegPlusSquare />} colorScheme="teal" px={3} type="submit">Add todo</Button>
                </motion.div>
            </HStack>
        </form>
    );
}

export default AddTodo;
